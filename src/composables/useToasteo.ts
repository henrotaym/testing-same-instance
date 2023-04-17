import { reactive } from "vue";
import ToastContainer from "../toasteo";

const container = reactive(new ToastContainer());
console.log("container created");

const useToasteo = () => {
  console.log("useToasteo started");
  return { toasteo: container };
};
export default useToasteo;
