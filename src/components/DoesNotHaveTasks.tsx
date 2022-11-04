import clipboard from '../assets/clipboard.svg'

export const DoesNotHaveTasks = () => {
  return (
    <div className="m-auto mt-6 w-[736px] rounded-xl border-t-[1px] border-t-gray-4000">
      <img className="m-auto mt-16 pb-4" src={clipboard} alt="" />
      <p className="text-center font-bold text-gray-3000">
        You don&apos;t have any tasks registered yet.
      </p>
      <p className="text-center text-gray-3000">
        Create tasks and organize your to-do items
      </p>
    </div>
  )
}
