import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-hot-toast';

export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateTask(params.id, data);
            toast.success("Tarea actualizada", {
                position: "bottom-right",
                style: {
                    background: "red",
                    color: "white"
                }
            });
        } else {
            await createTask(data);
            toast.success("Tarea creada", {
                position: "bottom-right",
                style: {
                    background: "red",
                    color: "white"
                }
            });
        }
        navigate("/tasks");
    });

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const {
                    data: { title, description, priority, severidad, done },
                } = await getTask(params.id);
                setValue('title', title);
                setValue('description', description);
                setValue('priority', priority);
                setValue('severidad', severidad);
                setValue('done', done);
            }
        }
        loadTask();
    }, [params.id, setValue]);

    return (
        <div className='max-w-xl max-auto'>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    {...register("title", { required: true })}
                    className='bg-zin-700 p-3 rounded-lg block w-full mb-3 text-black'
                />
                {errors.title && <span>Este campo es requerido</span>}

                <textarea
                    rows="3"
                    placeholder="Description"
                    {...register("description", { required: true })}
                    className='bg-zin-700 p-3 rounded-lg block w-full mb-3 text-black'
                ></textarea>
                {errors.description && <span>Este campo es requerido</span>}

                <label className='inline-flex items-center'>
                    <input
                        type="checkbox"
                        {...register("done")}
                        className='form-checkbox'
                    />
                    <span className='ml-2'>Hecho</span>
                </label>

                <select {...register("priority", { required: true })} className='bg-zin-700 p-3 rounded-lg block w-full mb-3 text-black'>
                    <option value="">Seleccione una prioridad</option>
                    <option value="1">Alta</option>
                    <option value="2">Media</option>
                    <option value="3">Baja</option>
                </select>
                {errors.priority && <span>Este campo es requerido</span>}

                <select {...register("severidad", { required: true })} className='bg-zin-700 p-3 rounded-lg block w-full mb-3 text-black'>
                    <option value="">Seleccione una severidad</option>
                    <option value="1">Urgente</option>
                    <option value="2">Importante</option>
                    <option value="3">Normal</option>
                </select>
                {errors.severidad && <span>Este campo es requerido</span>}

                <button type='Submit' className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>
                    Save
                </button>
            </form>

            {params.id && (
                <div className='flex justify-end'>
                    <button className='bg-red-500 p-3 rounded-lg w-48 mt-3'
                        onClick={async () => {
                            const accepted = window.confirm("¿Estás seguro?");
                            if (accepted) {
                                await deleteTask(params.id);
                                toast.success("Tarea eliminada", {
                                    position: "bottom-right",
                                    style: {
                                        background: "red",
                                        color: "white"
                                    }
                                });
                                navigate("/tasks");
                            }
                        }}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}
