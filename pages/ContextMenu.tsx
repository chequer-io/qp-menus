import type { NextPage } from "next";
import Head from "next/head";
import React, { useCallback, useEffect, useRef } from "react";
import { IREWMenu, ContextMenu } from "../qp-menus";
import styled from "@emotion/styled";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  FacebookOutlined,
  GithubOutlined,
  GooglePlusOutlined,
  MailOutlined,
  ReloadOutlined,
  SlackOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const ContextMenuExample: NextPage = () => {
  const contextMenu = useRef<ContextMenu>(
    new ContextMenu({
      id: "basic",
      style: { fontSize: "14px", minWidth: "200px" },
    })
  ).current;

  const onClickMenu = useCallback<IREWMenu.OnClickItem>((menuItem) => {
    console.log(menuItem);
  }, []);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      contextMenu.popup({ x: e.pageX, y: e.pageY });
    },
    []
  );

  useEffect(() => {
    contextMenu.setMenu([
      {
        label: "Back (enabled: false)",
        icon: <ArrowLeftOutlined />,
        click: onClickMenu,
      },
      {
        label: "Forward",
        icon: <ArrowRightOutlined />,
        click: onClickMenu,
        accelerator: "Cmd+F",
      },
      {
        label: "Reload",
        icon: <ReloadOutlined />,
        click: onClickMenu,
      },
      { type: "separator" },
      { label: "Save as", click: onClickMenu, visible: false },
      {
        label: "Print (enabled: false)",
        click: onClickMenu,
        enabled: false,
      },
      {
        type: "checkbox",
        label: "Action option 1",
        click: (menuItem, w, e) => {
          console.log(menuItem);
        },
      },
      {
        type: "checkbox",
        label: "Action option 2 (enabled: false)",
        checked: true,
        enabled: false,
        click: (menuItem, w, e) => {
          console.log(menuItem);
        },
      },
      {
        label: "send to...",
        submenu: [
          {
            label: "Github",
            icon: <GithubOutlined />,
            click: onClickMenu,
          },
          {
            label: "Gitlab",
            icon: <GithubOutlined />,
            click: onClickMenu,
          },
          {
            label: "Twitter",
            icon: <TwitterOutlined />,
            click: onClickMenu,
          },
          {
            label: "Facebook",
            icon: <FacebookOutlined />,
            click: onClickMenu,
          },
          {
            label: "Google+",
            icon: <GooglePlusOutlined />,
            click: onClickMenu,
            visible: false,
          },
          {
            label: "Slack (enabled: false)",
            icon: <SlackOutlined />,
            click: onClickMenu,
            enabled: false,
          },
          {
            label: "Email",
            icon: <MailOutlined />,
            click: onClickMenu,
          },
        ],
      },
      { type: "separator" },
      { label: "View Source", click: onClickMenu },
      { label: "Save", click: onClickMenu },
    ]);
  }, []);

  return (
    <div>
      <Head>
        <title>qp-menus : ContextMenu</title>
        <meta name="description" content="ContextMenu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container onContextMenu={handleContextMenu}>
        <h1>ContextMenu</h1>
        <p>Right mouse click here</p>
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 100vh;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ContextMenuExample;
