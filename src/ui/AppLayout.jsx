import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOvervie";
import Header from "./Header";
import LoadingComponent from "./LoadingComponent";

const AppLayout = () => {
  // Этот хук дает инфу о том загружается ли страница или нет || не путать с useNavigate
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <LoadingComponent />}

      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
