import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useForm, NestedValue } from 'react-hook-form';
import { useTodoListStore } from '../hooks/useTodoListStore';
import { Input } from '../components/Todo/Input';
import { List } from '../components/Todo/List';
import { getbits } from '../service/bit';

type FormData = {
  todo: string;
}

type Props = {
  data: string
}

const Home: NextPage<Props> = (props: Props) => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      todo: '',
    },
  });
  const { addTodo, asyncAddTodo, isPending, asyncInstaThunk, USD } = useTodoListStore();

  console.log(USD)
  console.log(props.data)

  const onSubmit = handleSubmit(({ todo }) => {
    console.log(todo)
    addTodo(todo);
    reset();
  });

  const onAsyncSubmit = handleSubmit(({ todo }) => {
    asyncAddTodo(todo);
    reset();
  });

  const ongetInsta = handleSubmit(() => {
    console.log('indexpage')
    asyncInstaThunk();
    reset();
  });

  return (
    <div>
      <Head>
        <title>Sample Next with TypeScript &amp; RTK</title>
      </Head>
      <form onSubmit={onSubmit}>
        <Input name='todo' ref={register} />
        <button>追加</button>
        <button type='button' disabled={isPending} onClick={onAsyncSubmit}>1秒後に追加</button>
        <button type='button' disabled={isPending} onClick={ongetInsta}>インスタ</button>
      </form>
      <List />
      <p>{USD}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const bits = await getbits()

  const props = {
    data: bits
  }

  console.log('-------')
  console.log(props)
  console.log('-------')
  return { props }
}

export default Home;
