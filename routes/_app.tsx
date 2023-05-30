import { AppProps } from "$fresh/server.ts";
import GlobalTags from "../components/GlobalTags.tsx";
import DesignSystem from "../sections/DesignSystem.tsx";

export default function App(props: AppProps) {
  return (
    <>
      <DesignSystem />
      <GlobalTags />
      <props.Component />
    </>
  );
}
