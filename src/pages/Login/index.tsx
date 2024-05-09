import {
  // AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  // TaobaoOutlined,
  // UserOutlined,
  // WeiboOutlined,
} from "@ant-design/icons";
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import {
  // Divider,
  // Space,
  Tabs,
  App,
  // theme,
} from "antd";
// import type { CSSProperties } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { sendEmailCode } from "../../graphql/auth";

import styles from "./index.module.less";

type LoginType = "phone" | "account" | "email";

const Page = () => {
  const { message } = App.useApp();

  const [loginType, setLoginType] = useState<LoginType>("email");

  const [run] = useMutation(sendEmailCode);
  return (
    <div className={styles.container}>
      <LoginFormPage
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
        // backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="Github"
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0,0.8)",
          backdropFilter: "blur(4px)",
        }}
        initialValues={{ email: "johnnywwy@gmail.com" }}
        subTitle="全球最大的代码托管平台"
        actions={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* <Divider plain>
              <span
                style={{
                  color: token.colorTextPlaceholder,
                  fontWeight: "normal",
                  fontSize: 14,
                }}
              >
                其他登录方式
              </span>
            </Divider> */}
            {/* <Space align="center" size={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: `1px solid ${token.colorPrimaryBorder}`,
                  borderRadius: "50%",
                }}
              >
                <AlipayOutlined style={{ ...iconStyles, color: "#1677FF" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: `1px solid ${token.colorPrimaryBorder}`,
                  borderRadius: "50%",
                }}
              >
                <TaobaoOutlined style={{ ...iconStyles, color: "#FF6A10" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: `1px solid ${token.colorPrimaryBorder}`,
                  borderRadius: "50%",
                }}
              >
                <WeiboOutlined style={{ ...iconStyles, color: "#1890ff" }} />
              </div>
            </Space> */}
          </div>
        }
      >
        <Tabs
          items={[
            // {
            //   key: "account",
            //   label: "账号密码登录",
            // },
            // {
            //   key: "phone",
            //   label: "手机号登录",
            // },
            {
              key: "email",
              label: "邮箱登录",
            },
          ]}
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        />
        {/* {loginType === "account" && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: "large",
                prefix: (
                  <UserOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className="prefixIcon"
                  />
                ),
              }}
              placeholder="用户名: admin or user"
              rules={[
                {
                  required: true,
                  message: "请输入用户名!",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className="prefixIcon"
                  />
                ),
              }}
              placeholder="密码: ant.design"
              rules={[
                {
                  required: true,
                  message: "请输入密码！",
                },
              ]}
            />
          </>
        )}
        {loginType === "phone" && (
          <>
            <ProFormText
              fieldProps={{
                size: "large",
                prefix: (
                  <MobileOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className="prefixIcon"
                  />
                ),
              }}
              name="mobile"
              placeholder="手机号"
              rules={[
                {
                  required: true,
                  message: "请输入手机号！",
                },
                {
                  pattern: /^1\d{10}$/,
                  message: "手机号格式错误！",
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: "large",
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className="prefixIcon"
                  />
                ),
              }}
              captchaProps={{
                size: "large",
              }}
              placeholder="请输入验证码"
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${"获取验证码"}`;
                }
                return "获取验证码";
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: "请输入验证码！",
                },
              ]}
              onGetCaptcha={async () => {
                message.success("获取验证码成功！验证码为：1234");
              }}
            />
          </>
        )} */}
        {loginType === "email" && (
          <>
            <ProFormText
              fieldProps={{
                size: "large",
                prefix: <MobileOutlined className="prefixIcon" />,
              }}
              name="email"
              placeholder="请输入邮箱"
              rules={[
                {
                  required: true,
                  message: "请输入邮箱！",
                },
                {
                  pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                  message: "邮箱格式错误！",
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className="prefixIcon" />,
              }}
              captchaProps={{
                size: "large",
              }}
              placeholder="请输入验证码"
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${"获取验证码"}`;
                }
                return "获取验证码";
              }}
              phoneName="email"
              name="code"
              rules={[
                {
                  required: true,
                  message: "请输入验证码！",
                },
              ]}
              onGetCaptcha={async (email) => {
                run({
                  variables: {
                    email,
                  },
                });
                message.success("获取验证码成功！验证码为：1234");
              }}
            />
          </>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            href="/"
            style={{
              float: "right",
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default () => {
  return (
    <ProConfigProvider dark>
      <App>
        <Page />
      </App>
    </ProConfigProvider>
  );
};
