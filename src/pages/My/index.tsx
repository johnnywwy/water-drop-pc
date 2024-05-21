import { useEffect, useRef } from "react";
import { App, Col, Form, Row } from "antd";
import { routes } from "@/routers/menus";
import {
  PageContainer,
  ProForm,
  ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import ImageUpload from "@/components/ImageUpload";
import { useUserContext } from "@/hooks/userHooks";
import { UPDATE_USER } from "@/graphql/user";
import { useMutation } from "@apollo/client";

// import style from "./index.module.less";

/**
 *
 */
const My = () => {
  const { message } = App.useApp();

  const formRef = useRef<ProFormInstance>();

  const { store } = useUserContext();

  const [updateUser] = useMutation(UPDATE_USER);

  useEffect(() => {
    console.log("routes", routes);
    if (!store.tel) return;
    formRef.current?.setFieldsValue({
      tel: store.email,
      name: store.name,
      desc: store.desc,
      avatar: {
        url: store.avatar,
      },
    });
  }, [store]);

  // 注释
  const submitter = {
    resetButtonProps: {
      style: {
        display: "none",
      },
    },
  };
  const onFinish = async (values: any) => {
    console.log("values", values);
    // message.success("登录成功");
    const { name, desc } = values;
    const res = await updateUser({
      variables: {
        id: store.id,
        params: { name, desc },
      },
    });
    console.log("res666", res);

    if (res.data.updateUser.code === 200) {
      message.success(res.data.updateUser.message);
    }
  };
  return (
    <PageContainer>
      <ProForm formRef={formRef} layout="horizontal" onFinish={onFinish} submitter={submitter}>
        <Row gutter={20}>
          <Col>
            <ProFormText name="tel" label="手机号" tooltip="不能修改" disabled />
            <ProFormText name="name" label="昵称" placeholder="请输入昵称" />
            <ProFormTextArea name="desc" label="简介" placeholder="请输入简介信息" />
          </Col>
          <Col>
            <Form.Item name="avatar" label="头像" tooltip="不能修改" valuePropName="fileList">
              <ImageUpload />
            </Form.Item>
          </Col>
        </Row>
      </ProForm>
    </PageContainer>
  );
};

export default My;
