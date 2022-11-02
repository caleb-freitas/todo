import { Trash } from 'phosphor-react'

type TaskTitle = {
  title: string
}

export const TaskCard = ({ title }: TaskTitle) => {
  return (
    <form className="mb-3 flex w-[736px] items-center justify-between rounded-lg border-[1px] border-gray-4000 bg-gray-5000 p-4">
      <div className="flex items-baseline gap-3">
        <input className="rounded-full bg-gray-4000" type="checkbox" />
        <p className="text-gray-1000">{title}</p>
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
