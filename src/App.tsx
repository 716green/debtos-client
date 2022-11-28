// import { useContext } from "react";
// import { GlobalContext } from "@/context";
// import { User } from "@supabase/supabase-js";
// import { GlobalState } from "./context/types";
import Layout from "@/views/Layout";

const App = () => {
  // const { user, setUser } = useContext<GlobalState>(GlobalContext);

  // const assignFakeUser = () => {
  //   const usr: User = {
  //     id: "123",
  //     app_metadata: {},
  //     aud: "asdf",
  //     confirmation_sent_at: "asdf",
  //     confirmed_at: "asdf",
  //     created_at: "asdf",
  //     email: "asdf",
  //     last_sign_in_at: "asdf",
  //     role: "asdf",
  //     updated_at: "asdf",
  //     user_metadata: {},
  //   };

  //   setUser(usr);
  // };

  return (
    <Layout>
      {[
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ].map((_: string, i: number) => (
        <div key={i} className="text-3xl">
          Hello World
        </div>
      ))}
    </Layout>
  );
};

export default App;
