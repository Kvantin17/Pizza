import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOvervie";
import Header from "./Header";
import LoadingComponent from "./LoadingComponent";

const AppLayout = () => {
  // Этот хук дает инфу о том загружается ли страница или нет || не путать с useNavigate
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <LoadingComponent />}

      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
