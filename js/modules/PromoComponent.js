export default{
    template:`
    <section id="signUp">
    <form method="POST" action="admin/sign-up.php" class="row">
        <h2 class="columns text-center">Subscribe Here</h2>
        <input type="text" class="columns" placeholder="First Name" required name="first_name">
        <input type="text" class="columns" placeholder="Last Name" required name="last_name">
        <input type="email" class="columns" placeholder="abc@abc" required name="email">
        <input type="text" class="columns" placeholder="country name" name="country">
        <button name="submit" class="columns button">Subscribe</button>
    </form>
</section>
    `,
}