import { PlusCircle } from 'phosphor-react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { TaskCard } from './TaskCard'

const addTaskInput = z.object({
  title: z.string().min(3).max(120),
})

type AddTaskInput = z.infer<typeof addTaskInput>

export const Tasks = () => {
  const [tasks, setTasks] = useState<AddTaskInput[]>([])

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AddTaskInput>()

  const handleAddTask = (task: AddTaskInput) => {
    setTasks((state) => [task, ...state])
    reset()
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
          className="w-[638px] rounded-lg border-[1px] border-gray-700 bg-gray-500 px-4 text-gray-100 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 p-4 font-bold text-gray-100 transition hover:bg-blue-300"
        >
          Add
          <PlusCircle weight="bold" />
        </button>
      </form>
      {tasks.map((task, index) => {
        return (
          <div key={index} className="flex justify-center">
            <TaskCard title={task.title} />
          </div>
        )
      })}
    </main>
  )
}
