import { Component, PropsWithChildren } from "react";
import { Button, Text } from "react-native";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/core";
import { RootStackParamList } from "@/app/types/RootStackParamList";

interface ErrorBoundaryState {
  hasError: boolean;
}

const DisplayErrorMessage = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <Text>Are you sure that&#39;s how you spell it?</Text>
      <Button onPress={goBack} title={"back"} />
    </>
  );
};

class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: unknown) {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.warn(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <DisplayErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
