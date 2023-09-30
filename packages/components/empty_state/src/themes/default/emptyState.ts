import { EmptyState } from "../types";
import * as baseEmptyState from "./base";

const emptyState: EmptyState = {
    ...baseEmptyState,
};

export default emptyState;
export { emptyState };
