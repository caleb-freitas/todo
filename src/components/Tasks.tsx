import { PlusCircle } from 'phosphor-react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import cuid from 'cuid'
import { TaskCard } from './TaskCard'

const taskSchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(3).max(120),
})

const addTaskInput = z.object({
  title: z.string().min(3).max(120),
})

type AddTaskInput = z.infer<typeof addTaskInput>
type Task = z.infer<typeof taskSchema>

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AddTaskInput>()

  const handleAddTask = (data: AddTaskInput) => {
    const task = {
      id: cuid(),
      ...data,
    }
    setTasks((state) => [task, ...state])
    reset()
  }

  const handleDeleteTask = (id: string) => {
    const tasksWithoutDeleted = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(tasksWithoutDeleted)
  }

  return (
    <main>
      <form
        onSubmit={handleSubmit(handleAddTask)}
        className="-mt-7 mb-8 flex justify-center gap-2"
      >
        <input
          {...register('title')}
          type="text"
          placeholder="Add a new task"
          className="w-[638px] rounded-lg border-[1px] border-gray-7000 bg-gray-5000 px-4 text-gray-100 placeholder:text-gray-3000 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-6000"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-6000 p-4 font-bold text-gray-1000 transition hover:bg-blue-3000"
        >
          Add
          <PlusCircle weight="bold" />
        </button>
      </form>
      {tasks.map((task) => {
        return (
          <div key={task.id} className="flex justify-center">
            <TaskCard task={task} onDeleteTask={handleDeleteTask} />
          </div>
        )
      })}
    </main>
  )
}
