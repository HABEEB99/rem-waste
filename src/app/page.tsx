import { OptionsList } from "@/components";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OptionsList />
    </Suspense>
  );
};

export default HomePage;
