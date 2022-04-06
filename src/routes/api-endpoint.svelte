<!-- <script>
    import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

    console.log(WooCommerceRestApi)

    const api = new WooCommerceRestApi({
    url: "https://vishwarekhafood.com/wp-json/wc/v3/products",
    consumerKey: "ck_d1446ae7147989ad025a5ebf675880958389cb76",
    consumerSecret: "cs_6381205250b2b02d2b9677d73685f3e27e5bf15a",
    version: "wc/v3"
    });

    // const ordersParams: OrdersParams = {
    //   page,
    //   per_page: 100,
    // };

    export async function handler(req, res){
        const responseData = {
            success: false,
            products: [],
        }
        try {
            const { data } = await api.get('products', {per_page: 100});
            
            responseData.success = true;
            responseData.products = data;

            console.log(111, responseData)

            res.json(responseData)

        } catch (error) {
            responseData.error = error.message;
            res.status(500).json(responseData);
        }
    }
</script> -->

<script>

import _ from "lodash";

let word = "alphabet"

console.log(_.capitalize(word))

</script>
<h1>api endpoint</h1>