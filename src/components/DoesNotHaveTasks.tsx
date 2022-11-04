import clipboard from '../assets/clipboard.svg'

export const DoesNotHaveTasks = () => {
  return (
    <section className="flex justify-center">
      <div>
        <img className="m-auto pb-4" src={clipboard} alt="" />
        <p className="font-bold text-gray-3000">
          You don&apos;t have any tasks registered yet.
        </p>
        <p className="text-gray-3000">
          Create tasks and organize your to-do items
        </p>
      </div>
    </section>
  )
}
