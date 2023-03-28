import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	base: "",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				restaurant: resolve(__dirname, "restaurant/index.html"),
				restaurant_dashboard: resolve(__dirname, "restaurant_dashboard/index.html"),
			},
		},
	},
});
