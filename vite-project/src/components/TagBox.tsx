

const TagBox = (props: { tag: string }) => {
  return (
    <div className="inline-flex items-center justify-center  lg:text-base text-xs   font-light text-center text-white rounded-lg hover:bg-primary-50 focus:ring-4 focus:ring-primary-300  outline outline-offset-2 outline-1 px-1 py-0.2 mb-2.5">
      {props.tag}
    </div>
  )
}

export default TagBox