import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import { MenuBar, IREWMenu } from "../qp-menus";
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

const MenuBarExample: NextPage = () => {
  const onClickMenu = useCallback<IREWMenu.OnClickItem>((menuItem) => {
    console.log(menuItem);
  }, []);

  return (
    <div>
      <Head>
        <title>qp-menus : MenuBar</title>
        <meta name="description" content="MenuBar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>MenuBar</h1>

        <div className="menubar-container">
          <MenuBar
            enableAltKeyAction={true}
            style={{ height: "25px" }}
            submenu={{
              style: { minWidth: "150px" },
              placement: "bottom",
            }}
            items={[
              {
                label: "&File",
                submenu: [
                  {
                    label: "Back (enabled: false)",
                    icon: <ArrowLeftOutlined />,
                    click: onClickMenu,
                    enabled: false,
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
                    label: "&Print (enabled: false)",
                    click: onClickMenu,
                    enabled: false,
                  },
                  {
                    type: "checkbox",
                    label: "Action option &1",
                    click: (menuItem, w, e) => {
                      console.log(menuItem);
                    },
                  },
                  {
                    type: "checkbox",
                    label: "Action option &2 (enabled: false)",
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
                ],
              },
              {
                label: "Edit",
                submenu: [
                  {
                    label: "Undo",
                    accelerator: "Cmd+Z",
                    click: onClickMenu,
                  },
                  {
                    label: "Redo",
                    accelerator: "Cmd++Shift+Z",
                    click: onClickMenu,
                  },
                ],
              },
              {
                label: "Selection",
                submenu: [
                  {
                    label: "Select All",
                    click: onClickMenu,
                  },
                ],
              },
            ]}
          />
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 100vh;
  background: #467bff;
  padding: 10px;
  overflow: auto;
  .menubar-container {
    padding: 0 10px;
    height: 25px;
    background: #eee;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

    font-size: 12px;
  }
`;

export default MenuBarExample;
