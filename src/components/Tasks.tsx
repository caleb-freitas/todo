import { PlusCircle } from 'phosphor-react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

const addTaskInput = z.object({
  title: z.string().min(3).max(120),
})

type AddTaskInput = z.infer<typeof addTaskInput>

export const Tasks = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AddTaskInput>()

  const handleAddTask = (data: AddTaskInput) => console.log(data)

  return (
    <main>
      <form
        onSubmit={handleSubmit(handleAddTask)}
        className="flex justify-center -mt-7 gap-2"
      >
        <input
          {...register('title')}
          type="text"
          placeholder="Add a new task"
          className="bg-gray-500 w-[638px] border-[1px] border-gray-700 rounded-lg text-gray-100 placeholder:text-gray-300 px-4 focus:ring-2 focus:ring-purple-600 focus:outline-none focus:ring-inset"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-300 transition p-4 rounded-lg flex gap-2 text-gray-100 font-bold items-center justify-center"
        >
          Add
          <PlusCircle weight="bold" />
        </button>
      </form>
    </main>
  )
}
