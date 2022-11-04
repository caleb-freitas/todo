import { Trash } from 'phosphor-react'

type TaskTitle = {
  title: string
}

export const TaskCard = ({ title }: TaskTitle) => {
  return (
    <form className="mb-3 flex w-[736px] items-center justify-between rounded-lg border-[1px] border-gray-4000 bg-gray-5000 p-4">
      <div className="flex items-center gap-3">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="peer h-4 w-4 rounded-full bg-gray-4000 ring-2 ring-blue-6000 ring-offset-0 checked:bg-purple-6000 checked:ring-purple-6000"
        />
        <p className="text-gray-1000 peer-checked:text-gray-3000 peer-checked:line-through">
          {title}
        </p>
      </div>
      <button
        className="rounded p-1.5 text-gray-300 transition hover:bg-gray-4000 hover:text-red-3000"
        type="submit"
      >
        <Trash className="" weight="bold" />
      </button>
    </form>
  )
}
