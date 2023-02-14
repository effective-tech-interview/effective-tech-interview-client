import { useEffect } from 'react';
import type { ReactElement } from 'react';
import { useRecoilSnapshot } from 'recoil';

const RecoilDebugObserver = (): ReactElement | null => {
  const snapshot = useRecoilSnapshot();
  const getLoadable = snapshot.getLoadable;
  const snapshotList = Array.from(snapshot.getNodes_UNSTABLE({ isModified: true }));

  useEffect(() => {
    console.debug('The following atoms were modified:');
    for (const node of snapshotList) {
      console.debug(node.key, getLoadable(node));
    }
  }, [snapshotList, getLoadable]);

  return null;
};

export default RecoilDebugObserver;
