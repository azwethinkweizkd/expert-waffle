<script lang="ts">
    import type {PageData} from "./$types";

    export let data: PageData;

    function formatDate(date: Date) {
        return new Intl.DateTimeFormat('en', {
            dateStyle: 'long'
        }).format(date)
    };

    $: ({post} = data)
</script>

<hgroup>
    <h1>{post?.title}</h1>
    <h2>{formatDate(post?.createdAt)}</h2>
</hgroup>


<div class="content">
    {@html post?.content}
</div>

<div class="posts">
    <h3>Posts</h3>
    <ul>
        {#each data.posts as {slug, title}}
            <li>
                <a href="/posts/{slug}">{title}</a>
            </li>
        {/each}
    </ul>
</div>


<style>
    .posts {
        margin-top: 2rem;
    }
</style>