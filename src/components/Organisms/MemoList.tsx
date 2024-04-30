'use client';

import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { MemoType } from '@/constants/types';
import Table from '../Molcules/Table';
import TableHeader from '../Molcules/TableHeader';
import TableBody from '../Molcules/TableBody';

function MemoList() {
  const [memoList, setMemoList] = useState<MemoType[]>([]);

  const getMemo = async (id: number) => {
    try {
      const response = await axios.get(`/api/memo/?id=${id}&isUnique=0`);

      setMemoList(response.data.data);
    } catch (error: unknown) {
      console.log('불러오기 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    getMemo(1);
  }, []);

  const headerInfo = useMemo(
    () => [
      { id: 1, children: '번호', width: '80px', flex: 'none' },
      { id: 2, children: '제목', width: '100%', flex: '1' },
      { id: 3, children: '등록된 날짜', width: '120px', flex: 'none' },
    ],
    [],
  );

  if (memoList.length > 0) {
    return (
      <Table width="720px">
        <TableHeader headerInfo={headerInfo} />

        {memoList.map((memo) => {
          const bodyInfo = [
            {
              id: 1,
              description: '번호',
              children: memo.id,
              fontWeight: 'normal',
              width: headerInfo[0].width,
              flex: headerInfo[0].flex,
            },
            {
              id: 2,
              description: '제목',
              children: <Link href={`my/memo/${memo.id}`}>{memo.title}</Link>,
              fontWeight: 'bold',
              width: headerInfo[1].width,
              flex: headerInfo[1].flex,
            },
            {
              id: 3,
              description: '등록된 날짜',
              children: memo.createdAt.split('T')[0],
              fontWeight: 'normal',
              width: headerInfo[2].width,
              flex: headerInfo[2].flex,
            },
          ];

          return <TableBody key={memo.id} bodyInfo={bodyInfo} />;
        })}
      </Table>
    );
  }

  return <></>;
}

export default MemoList;
