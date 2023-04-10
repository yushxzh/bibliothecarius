import Head from 'next/head'
import {Inter} from 'next/font/google'
import React from "react";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Head>
        <title>智能助理</title>
        <meta name="description" content="Generate your own library powered by AI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Homepage</h1>
        <h2>1.创建数据集</h2>
        <h2>2.上传文件至数据集，目前支持txt、md格式</h2>
        <h2>3.等待数据集解析完成，使用数据集创建场景</h2>
        <h2>4.创建场景,指定数据集，解析模型，和模型初始设定</h2>
      </div>
    </>
  )
}
