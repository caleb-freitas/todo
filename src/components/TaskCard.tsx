import { Trash } from 'phosphor-react'

type TaskTitle = {
  title: string
}

export const TaskCard = ({ title }: TaskTitle) => {
  return (
    <form className="mb-3 flex w-[736px] items-center justify-between rounded-lg border-[1px] border-gray-400 bg-gray-500 p-4">
      <div className="flex items-baseline gap-3">
        <input className="rounded-full" type="checkbox" />
        <p className="text-gray-100">{title}</p>
        <button type="submit">
          <Trash className="text-gray-300" weight="bold" />
        </button>
      </div>
    </form>
  )
}
