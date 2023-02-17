import Button from '~/components/common/Button';
import Text from '~/components/common/Text';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Text variant="h1">이팩티브 기술면접</Text>
      <Text variant="h2">이팩티브 기술면접</Text>
      <Text variant="b1">이팩티브 기술면접</Text>
      <Text variant="b2">이팩티브 기술면접</Text>
      <Text variant="subtitle">이팩티브 기술면접</Text>
      <Text variant="caption">이팩티브 기술면접</Text>
      <div
        style={{
          display: 'flex',
          height: '500px',
          flexDirection: 'column',
          width: '328px',
          justifyContent: 'space-between',
        }}
      >
        <Button width={7.2} color="primary_default" backgroundColor="primary_light">
          변경
        </Button>
        <Button>버튼</Button>
        <Button backgroundColor="primary_press">버튼</Button>
        <Button backgroundColor="gray400">버튼</Button>
        <Button backgroundColor="gray600">버튼</Button>
        <Button color="gray400" backgroundColor="gray050">
          버튼
        </Button>
        <Button backgroundColor="system_error">버튼</Button>
      </div>
    </div>
  );
}
