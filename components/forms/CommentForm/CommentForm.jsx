import { useForm } from 'react-hook-form'

const CommentForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...register("postContent", { required: true, maxLength: 80 })} cols="20" rows="5" placeholder="What's on your mind ?" />
          <button type='submit'>Done</button>
        </form>
      </div>
    </div>
  )
};

export default CommentForm;
