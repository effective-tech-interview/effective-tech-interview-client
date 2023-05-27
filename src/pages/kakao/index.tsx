import { useNextRouter } from '~/hooks/useNextRouter';

export default function Kakao() {
  const { query } = useNextRouter({ suspense: true });
  console.log(query.code);
  return <h1>hi</h1>;
}
