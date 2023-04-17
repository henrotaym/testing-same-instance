import { reactive } from "vue";
import ToastContainer from "../toasteo";

const container = new ToastContainer();

const useToasteo = () => reactive(container);
export default useToasteo;
