import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const MythsAndFacts = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Myths and Facts" ?
    <div className="blog-post-container">
    <div className="blog-post-inner">
      <h1>{blogdata.title}</h1>
      <div className="blog-line"></div>
      <br></br>
      <p>{blogdata.description}</p>
        <div className="blog-post-attributes">
          <p>{blogdata.author}</p>
          <p>{blogdata.date}</p>
        </div>
      <img src={blogdata.img} alt="tired person" className="blog-post-img" />
      <div className="blog-content">
        <h5>
        There are links in this newsletter for resources on suicide prevention and for those in crisis. The links are safe to click.         
        </h5> 
        <p>
        First responders…you…are crucial to ensuring public safety and are nearly always the first on the scene of incidents or natural disasters, making sure those involved and the public are safe and tended to. The work you do on a day-to-day basis is inherently dangerous because of the physical nature of the activities and the environmental exposures that are frequently encountered. There is a growing concern that, because of these risks, first responders carry another burden…trauma. We have focused on trauma; primary, secondary, vicarious; because it is a normal part of your life and your profession and can have profoundly negative effects on your mental and physical health. 
        </p>
        <p>
        Suicide may not be predictable, but it can be preventable by assessing social, cultural and environmental risk factors. Myths and misconceptions about mental health influence society’s beliefs and attitudes about suicide, which could be a major barrier to seeking help for themselves and their loved ones.
        </p>
        <p>
        Here are eight common myths about suicide (taken from NIHM):
        </p>
        <p>
       <b> Myth 1: Talking about suicide increases the chance a person will act on it.</b>
        </p>
        <p>
       <b> Fact:</b> Talking about suicide may reduce, rather than increase, suicidal ideation. It improves mental health-related outcomes and the likelihood that the person would seek treatment. Opening this conversation helps people find an alternative view of their existing circumstances. If someone is in crisis or depressed, asking if he or she is thinking about suicide can help, so don't hesitate to start the conversation.
        </p>

        <p>
       <b> Myth 2: People who talk about suicide are just seeking attention.</b>
        </p>
        <p>
       <b> Fact:</b> People who die from suicide have often told someone about not wanting to live anymore or they do not see the future. It's always important to take seriously anybody who talks about feeling suicidal. It's important to be kind and sensitive, and ask direct questions such as: "Are you thinking about hurting yourself?" "Are you thinking about suicide?" or "Do you have access to weapons or things that can be used as weapons to harm yourself?"
        </p>

        <p>
       <b> Myth 3: Suicide can't be prevented.</b>
        </p>
        <p>
       <b> Fact:</b> Suicide is preventable but unpredictable. Most people who contemplate suicide often experience intense emotional pain, hopelessness, and may have a negative view of life or their future. Suicide is a product of genes, mental health illnesses and environmental risk factors. 
        </p>

        <p>
       <b> Myth 4: People who take their own lives are selfish, cowards or weak.</b>
        </p>
        <p>
       <b> Fact:</b> People do not die of suicide by choice. Often, people who die of suicide experience significant emotional pain and find it difficult to consider different views or see a way out of their situation. 
        </p>

        <p>
       <b> Myth 5: Teenagers and college students are the most at risk for suicide.</b>
        </p>
        <p>
       <b> Fact:</b> The suicide rate for this age group is below the national average, and suicide risk increases with age. The age group with the highest suicide rate in the U.S is men and women between 45 and 64. Though particular groups may be at higher risk, suicide is a problem among all ages and groups.
        </p>

        <p>
       <b> Myth 6: Barriers to bridges, safe firearm storage and other actions to reduce access to lethal methods of suicide don't work.</b>
        </p>
        <p>
       <b> Fact:</b> Limiting access to lethal means, such as firearms, is one of the simplest strategies to decrease the chances of suicide. Many suicide attempts are a result of impulsive decisions. Therefore, separating someone from a lethal means could provide a person some time to think before doing harm to themselves.
        </p>

        <p>
       <b> Myth 7: Suicide always occurs without warning.</b>
        </p>
        <p>
       <b> Fact:</b> There are almost always warning signs before a suicide attempt.
        </p>
        <ul className="blog-post-ul">
          <h5>Here are a few common signs:</h5>
            <li>Talking about suicide — making statements such as "I'm going to kill myself," "I wish I were dead" or "I wish I hadn't been born."</li>
            <li>Getting the means to take their own life, such as buying a gun or stockpiling pills.</li>
            <li>Withdrawing from social contact and wanting to be left alone.</li>
            <li>Having mood swings, such as being emotionally high one day and deeply discouraged the next.</li>
            <li>Being preoccupied with death, dying or violence.</li>
            <li>Feeling trapped or hopeless about a situation.</li>
            <li>Increasing use of alcohol or drugs.</li>
            <li>Changing normal routine, including eating or sleeping patterns.</li>
            <li>Doing risky or self-destructive things, such as using drugs or driving recklessly.</li>
            <li>Giving away belongings or getting affairs in order when there is no other logical explanation for doing this.</li>
            <li>Saying goodbye to people as if they won't be seen again.</li>
            <li>Developing personality changes or being severely anxious or agitated, particularly when experiencing some of the warning signs listed above.</li>
        </ul>

        <p>
       <b>Myth 8: Talk therapy and medications don't work.</b>
        </p>
        <p>
       <b> Fact:</b> Treatment can and does work. One of the best ways to prevent suicide is by getting treatment for mental illnesses, such as depression, bipolar illness or substance abuse, and learning ways to cope with problems. Finding the best treatment can take some time, and the right treatment can greatly reduce the risk of suicide.
        </p>

        <ul className="blog-post-ul">
          <h5>If a friend or loved one talks or behaves in a way that makes you believe he or she might attempt suicide, don't try to handle the situation alone:</h5>
          <li>Get help from a trained professional as quickly as possible. The person may need to be hospitalized until the suicidal crisis has passed.
          </li>
          <li>Encourage the person to call a suicide hotline number.
          In the U.S., call the 988 Suicide and Crisis Lifeline at 988 or chat at 988lifeline.org to reach a trained counselor. Call 988 and press "1" to reach the Veterans Crisis Line.
          </li>
        </ul>
        <p>
        You're not responsible for preventing someone from taking their own life, but your intervention may help them see that other options are available to stay safe and get treatment.
        <br></br>
        Some resources for you or somebody who needs your help;
        </p>


      <p>
      <b>988</b> a 24 hour crisis line
      </p>
      <p>
      <b>911</b> for an individual in a life threatening emergency and immediate danger of harming themselves; ask for a CIT (Crisis Intervention Team) officer. They are specially trained to help you in a mental health crisis.
        </p>
        <p>
        <b>SafeUT</b> app – put this app on your phone to have at your fingertips
        </p>
        <p>
        <b>1-800-273-TALK</b>
        </p>
        <p>
        <b>Text LISTEN to 741741</b>
        </p>
        <p>
        <b>1-866-488-7386 </b>the Trevor Project
        </p>
        <ul>
          <p>Other resources and websites:</p>
          <li>utahsuicideprevention.org   </li>
          <li>www.afsp.org</li>
          <li>www.hopr4utah.com </li>
          <li>www.veteranscrisisline.net</li>
          <p>For more information:</p>
          <li>https://intermountainhealthcare.org/blogs/suicide-prevention-resources-in-utah </li>
        </ul>
        <p>
        <b>Latino Behavioral Health Services </b>801-935-4447 for information about these services. Call 385-495-2188 for emotional support. <br></br>
        Proveyendo apoyo emocional y servicios de salud mental a la comunidad Latina en Ingles y Espanol. Para mas informacion, por favor llame al (801) 935-4447 Si usted o alguien que usted conozca necesita apoyo emocional en este momento, por favor llame a nuestra Linea de Apoyo Emocional: (385) 495-2188
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from National Institute of Mental Health (NIMH), Centers for Disease Control and Prevention (CDC), and U.S. Fire Administration. I hope you enjoyed your reading. 
        </p>
      </div>
    </div>
  </div>
  : null
  )
})

  return (
    <div>
      <NavBar />
      <div className="BlogPost">
      {mappedBlogPost}
      </div>
      <MemberCareFooter />
    </div>
  )
  
}

export default MythsAndFacts;
