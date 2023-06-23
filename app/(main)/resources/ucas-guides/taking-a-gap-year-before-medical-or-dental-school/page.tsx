import PageIntro from '@/sections/page-intro'

import Article from '@/components/articles/article'
import Categories from '@/components/articles/categories'

export default function Page() {
  return (
    <>
      <PageIntro
        title='Taking a Gap Year before Medical or Dental School'
        pretitle='14 DECEMBER 2022'
        image={{ sourceUrl: '/images/content/about-header.jpg' }}
      />
      <Categories />
      <Article
        content="<h2>Traveling Abroad</h2><p>If you decide to travel across the UK or even the world to bask in the wonders it offers, you should plan out your finances and look for the cheapest deals possible. It might include looking at websites such as (HolidayPirate) and (Skyscanner.) to secure flight and holiday packages for yourself and your friends. During your medical degree, the only feasible time to travel appears to be the summer when</p><h2>Side-hustle</h2><p>Setting up a youtube channel, podcast or perhaps even selling your wares on a website like Etsy is a great chance to start creating a side-hustle that will be able to support you through University and later on into your career. Doing this means you're less reliant upon student finance and also suggests that</p><h2>Start learning the fundamentals</h2><p>As your gap year draws close, it might be worth revising critical aspects of the medical degree you'll be undertaking by revisiting key topics from A-level sciences. A variety of courses are offered by organisations such as Coursera” and LinkedInLearning. It Is great to build up your interpersonal skills and scientific knowledge, which are two key aspects which will underpin your future career as a doctor/dentist.</p><h2>What to expect from here on out</h2>
      <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
      <p>It's important to cover all of these use cases for a few reasons:</p>
      <ol>
        <li>We want everything to look good out of the box.</li>
        <li>Really just the first reason, that's the whole point of the plugin.</li>
        <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
      </ol>
      <p>Now we're going to try out another header style.</p>
      <h3>Typography should be easy</h3>
      <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
      <p>Something a wise person once told me about typography is:</p>
      <blockquote><p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p></blockquote>
      <p>It's probably important that images look okay here by default as well:</p>
      <figure>
        <img src='https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80' alt='' />
      <figcaption>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</figcaption>
    </figure >
      <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>
      <ul>
        <li>So here is the first item in this list.</li>
        <li>In this example we're keeping the items short.</li>
        <li>Later, we'll use longer, more complex list items.</li>
      </ul>
      <p>And that's the end of this section.</p>
      <h2>What if we stack headings?</h2>
      <h3>We should make sure that looks good, too.</h3>
      <p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>
      <h3>When a heading comes after a paragraph …</h3>
      <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p>
      <ul>
        <li>
          <p><strong>I often do this thing where list items have headings.</strong></p>
          <p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p>
          <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.</p>
        </li>
        <li>
          <p><strong>Since this is a list, I need at least two items.</strong></p>
          <p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.</p>
        </li>
        <li>
          <p><strong>It's not a bad idea to add a third item either.</strong></p>
          <p>I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p>
        </li>
      </ul>
      <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p><h3>What about nested lists?</h3>
      <p>Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p>
      <ol>
        <li>
          <strong>Nested lists are rarely a good idea.</strong>
          <ul>
            <li>You might feel like you are being really 'organized' or something but you are just creating a gross shape on the screen that is hard to read.</li>
            <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
            <li>Nesting tons of folders in your source code is also not helpful.</li>
          </ul >
        </li >
        <li>
          <strong>Since we need to have more items, here's another one.</strong>
          <ul>
            <li>I'm not sure if we'll bother styling more than two levels deep.</li>
            <li>Two is already too much, three is guaranteed to be a bad idea.</li>
            <li>If you nest four levels deep you belong in prison.</li>
          </ul>
        </li>
        <li>
          <strong>Two items isn't really a list, three is good though.</strong>
          <ul>
            <li>Again please don't nest lists if you want people to actually read your content.</li>
            <li>Nobody wants to look at this.</li>
            <li>I'm upset that we even have to bother styling this.</li>
          </ul>
        </li>
      </ol >
      <p>The most annoying thing about lists in Markdown is that li elements aren't given a child p tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p>
      <ul>
        <li>
          <p><strong>For example, here's another nested list.</strong></p>
          <p>But this time with a second paragraph.</p>
          <ul>
            <li>These list items won't have p tags</li>
            <li>Because they are only one line each</li>
          </ul>
        </li>
        <li>
          <p><strong>But in this second top-level list item, they will.</strong></p>
          <p>This is especially annoying because of the spacing on this paragraph.</p>
          <ul>
            <li>
              <p>As you can see here, because I've added a second line, this list item now has a p tag.</p>
              <p>This is the second line I'm talking about by the way.</p>
            </li>
            <li><p>Finally here's another list item so it's more like a list.</p></li>
          </ul>
        </li>
        <li><p>A closing list item, but with no nested list, because why not?</p></li>
      </ul>
      <p>And finally a sentence to close off this section.</p>
      <h2>There are other elements we need to style</h2>
      <p>We even included table styles, check it out:</p>
      <table>
        <thead>
          <tr>
            <th>Wrestler</th>
            <th>Origin</th>
            <th>Finisher</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bret 'The Hitman' Hart</td>
            <td>Calgary, AB</td>
            <td>Sharpshooter</td>
          </tr>
          <tr>
            <td>Stone Cold Steve Austin</td>
            <td>Austin, TX</td>
            <td>Stone Cold Stunner</td>
          </tr>
          <tr>
            <td>Randy Savage</td>
            <td>Sarasota, FL</td>
            <td>Elbow Drop</td>
          </tr>
          <tr>
            <td>Vader</td>
            <td>Boulder, CO</td>
            <td>Vader Bomb</td>
          </tr>
          <tr>
            <td>Razor Ramon</td>
            <td>Chuluota, FL</td>
            <td>Razor's Edge</td>
          </tr>
        </tbody>
      </table><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus asperiores ab, necessitatibus reprehenderit nihil exercitationem ea pariatur labore rerum porro eos? Iusto, nam! Veniam?</p>"
      />
    </>
  )
}
