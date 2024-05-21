import { useEffect, useRef } from "react";
import { Col, Row, message } from "antd";
import { routes } from "@/routers/menus";
// import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  ProForm,
  ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import ImageUpload from "@/components/ImageUpload";
import { useUserContext } from "@/hooks/userHooks";

// import style from "./index.module.less";

/**
 *
 */
const My = () => {
  const formRef = useRef<ProFormInstance>();

  const { store } = useUserContext();

  // const [state, setState] = useState();
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
  return (
    <PageContainer>
      <ProForm
        formRef={formRef}
        layout="horizontal"
        onFinish={async (values) => {
          console.log("values", values);
          message.success("提交成功");
        }}
        submitter={submitter}
      >
        <Row gutter={20}>
          <Col>
            <ProFormText name="tel" label="手机号" tooltip="不能修改" disabled />
            <ProFormText name="name" label="昵称" placeholder="请输入昵称" />
            <ProFormTextArea name="desc" label="简介" placeholder="请输入简介信息" />
          </Col>
          <Col>
            <ImageUpload />
          </Col>
        </Row>
      </ProForm>
    </PageContainer>
  );
};

export default My;
