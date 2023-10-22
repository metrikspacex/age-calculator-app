import type { RestHandler } from "msw";
import { rest } from "msw";

export const handlers: RestHandler[] = [rest.get("", () => {})];
