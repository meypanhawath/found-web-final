import React from 'react'
// import upperImg from '../../assets/upperImg.png'
import Navbar from '../../components/navbar/Navbar'

import '../../App.css'
import GlassCard from '../../components/glass/GlassCard'
import GlassBG from '../../components/glass/GlassBG'
import Test from '../../components/glass/Test'
import { PrimaryBtn, SecondaryBtn } from '../../components/button/Button'
import VantaBackground from '../../components/backgroundEffect/HaloBackground'
import VantaClouds from '../../components/backgroundEffect/CloudBackground'
import BirdBackground from '../../components/backgroundEffect/BirdBackground'
import GlassBackground from '../../components/glass/GlassBackground'

const Home = () => {
  return (
    <>
    
    {/* <video autoPlay loop muted className='absolute w-full h-full object-cover z-1'>
      <source src={sampleVid} type="video/mp4" />
    </video> */}
    <Navbar />
    <GlassBG />
    <section className="h-[100vh] relative overflow-hidden bg-smoke">
      
  {/* Background with blur */}
  <div className="absolute inset-0 -z-10"></div>
  
  {/* Content without blur */}
  <div className="relative z-10">
    
    
    {/* <img className='absolute -top-10 w-full -z-1 blur-2xl' src={upperImg} alt="" /> */}
    
      <GlassCard width='w-full' height='h-[65vh]' className='max-w-screen-xl container relative mx-auto grid grid-cols-[1.5fr_1fr] bg-white/20 backdrop:blur-xl gap-20 items-center mt-[5%] py-20 px-10 rounded-2xl shadow-2xl shadow-gray-200'>
      <div>
        <h1 className='text-heading font-heading'>Build Your Professional <span className='text-primary'>Portfolio</span> in Minutes </h1>
        <p className='text-desc font-desc my-desc'>Crevo is redefining website design—its intuitive interface lets you create, manage, and customize your site with ease.</p>
        <div className='flex gap-20'>
          <PrimaryBtn>Get started</PrimaryBtn> 
        <SecondaryBtn>Test 1</SecondaryBtn>
        </div>
      </div>
        <div className=''>
        {/* <Test animation='animate-circle1'/> */}
        <GlassCard width='w-25' height='h-25' className='absolute top-40 left-[75%]' animation='animate-circle1' delay='[animation-delay:0s]' />
        <GlassCard width='w-25' height='h-25' className='absolute top-40 left-[75%]' animation='animate-circle1' delay='[animation-delay:2s]' />
        <GlassCard width='w-25' height='h-25' className='absolute top-40 left-[75%]' animation='animate-circle1' delay='[animation-delay:4s]' />
        <GlassCard width='w-25' height='h-25' className='absolute top-40 left-[75%]' animation='animate-circle1' delay='[animation-delay:6s]' />
        {/* <GlassCard width='w-25' height='h-25' position='absolute' top='top-50' left='left-10' /> */}
        {/* <div className='w-50 h-50 backdrop-blur-xl bg-white/10 border border-white/20 transition-all hover:scale-105 hover:shadow-[inset_120px_0_0_0_#50299B] duration-500'></div> */}
      </div>
      </GlassCard>
      
    
  </div>
</section>

    <section>
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem mollitia assumenda distinctio id hic veniam possimus soluta tenetur repellat corrupti nam delectus labore inventore, iure error perferendis laudantium excepturi!
      Exercitationem quaerat suscipit nisi iure cumque sed accusantium temporibus deserunt, tenetur neque beatae doloremque, totam necessitatibus vero incidunt molestias? Mollitia enim autem a eligendi voluptatum earum quasi magnam accusamus repudiandae.
      Doloribus nesciunt tempora iusto sit, at pariatur hic qui ratione cumque quia autem esse. Natus illo, dolore esse sequi vitae dolorem architecto voluptatem cupiditate repellendus, nulla reiciendis eos accusamus voluptas.
      Saepe cupiditate amet aspernatur nobis illo, fugiat eius impedit enim recusandae exercitationem eos, blanditiis alias veritatis aperiam, expedita porro? Rerum voluptates recusandae id error pariatur aliquam ea deleniti, quibusdam provident.
      Temporibus itaque libero quod maxime voluptas accusantium fugiat nisi molestias expedita? Exercitationem ex ipsa optio adipisci qui non hic. Fugiat enim amet excepturi ducimus alias omnis quas aspernatur similique tenetur!
      Earum, reiciendis dolor? Voluptates voluptas eius, modi rerum, ullam esse eum optio nihil, dolorum ipsam accusamus! Error eos expedita repellat obcaecati, veniam quaerat ducimus magnam nostrum aliquam quae, ipsum numquam?
      Facere, reprehenderit ab fugiat dicta quidem rerum ea quas impedit, aut odio officiis ratione quod sunt nostrum debitis quia iste! Vel deleniti harum eum quasi sed sint quam enim et?
      Tenetur officia soluta cumque reprehenderit possimus laboriosam architecto dicta voluptates repellat. Nulla, doloribus, voluptas sint id suscipit rem esse ad laudantium sequi eum ea, pariatur maiores doloremque hic unde vitae?
      Numquam non commodi obcaecati id ratione blanditiis recusandae quam, quidem earum voluptate itaque facilis, rerum aliquid maxime, porro quibusdam. Dolores deleniti optio rerum reiciendis est recusandae similique id, vel alias?
      Aperiam, molestias earum voluptas amet odit atque praesentium a hic autem! Optio incidunt animi recusandae sed id sint libero obcaecati neque rem tenetur! Odit, quis ipsum sint magnam similique minus?
      Fugit veniam fuga consectetur deleniti animi consequatur deserunt? Est reiciendis dolores facere quos aperiam voluptatum cumque sed nulla. Fugiat, aspernatur libero? Cupiditate, at! Sed numquam ab laborum, sint fugit magni.
      Saepe, nulla dolores eum dolor alias distinctio dignissimos iure perspiciatis voluptate nostrum dolorum ut. Qui, debitis sed quidem pariatur consequuntur laudantium, voluptatem suscipit quaerat velit dolorem ex facere libero perferendis.
      Error dolorem quasi officiis enim aspernatur? Asperiores, doloremque commodi repellendus ex qui, alias corrupti voluptas voluptates perspiciatis deleniti quo iusto aliquam. Doloremque quae placeat molestias enim veritatis officiis nemo ducimus.
      Nobis placeat nulla quisquam blanditiis ipsum enim magni repudiandae illum iusto possimus vitae, sapiente amet minus dicta! Numquam, unde in obcaecati, nobis voluptates recusandae amet tenetur animi iure officia corporis.
      Omnis saepe, molestiae, ab voluptas non molestias ducimus aliquam explicabo quidem voluptatem dolorum eius accusantium quo magni, exercitationem id perspiciatis aperiam. Repellendus excepturi ducimus vitae, odio distinctio quod dicta maiores?
      Minus alias architecto recusandae sint laudantium voluptas necessitatibus officia facere explicabo molestiae. Voluptas recusandae ducimus atque libero veritatis modi corporis quas obcaecati sit ipsa. Iste, laborum. Reprehenderit, maxime consequuntur? Obcaecati!
      Blanditiis ducimus animi exercitationem officiis cumque deserunt expedita, molestias, repudiandae aperiam illum nihil eaque sed nulla architecto sint. Deleniti modi repudiandae, corrupti architecto officiis labore voluptatum dolorem unde repellendus odio?
      Voluptatibus voluptatem ut adipisci dolores fuga minus sapiente. Nesciunt dolore odit doloremque quos exercitationem facilis cupiditate maxime, natus dicta optio iure cumque aperiam sapiente magnam repellat atque corporis autem quisquam!
      Corporis voluptas sit explicabo? Provident cumque officia, nostrum accusamus tenetur magnam! Dolor sed reiciendis iste rerum laborum odio earum vitae, minima sequi voluptatibus expedita fuga assumenda aspernatur tempore quod ipsum.
      Aliquid incidunt minus excepturi blanditiis nihil architecto repudiandae porro esse illum animi, aspernatur voluptas accusamus laborum nesciunt iusto tempore corrupti nobis sed error velit commodi ea? Nostrum excepturi in repellat.
      Accusamus eos modi autem? Similique vitae beatae officia cupiditate iusto nulla fuga blanditiis aspernatur corporis, fugiat exercitationem tenetur magnam magni temporibus reiciendis veniam voluptatibus? Optio rem unde quis asperiores dolor?
      Possimus autem sapiente incidunt officia blanditiis quia commodi, nemo necessitatibus a laborum? Dolor minus quaerat doloremque exercitationem dolores eius excepturi quo quibusdam, dignissimos tempore, quam molestias vel itaque voluptate! Beatae?
      Inventore neque repellat eveniet ipsam! Excepturi nam optio fugit inventore provident laborum, nostrum nemo quas tenetur reprehenderit tempora architecto? Obcaecati accusamus libero rerum vero ipsum excepturi dolor enim autem neque.
      Nostrum sit reprehenderit impedit eligendi praesentium itaque error quidem! Id repellendus incidunt assumenda ipsam mollitia magnam voluptates repellat? Asperiores totam reprehenderit nam necessitatibus, perferendis nostrum eius omnis repellendus consequatur doloremque.
      Laboriosam voluptas recusandae, excepturi ratione obcaecati illum aliquam temporibus inventore eius eos distinctio in odit repudiandae consequuntur earum ut impedit. Iusto, eligendi fugit architecto ipsam maiores earum atque eius voluptas.
      Nisi tempora, doloremque aut ipsa consequatur, non quos debitis fugit, delectus saepe aperiam natus necessitatibus eaque nemo molestiae possimus esse est numquam vitae culpa. Eius beatae dicta voluptate earum quasi.
      Commodi, corporis non? Minus dolor quasi corrupti dignissimos. Velit, eum labore veritatis aspernatur nam sunt cum, a ipsa veniam, hic dicta recusandae. Velit quaerat quam dolore? Iste alias quaerat distinctio!
      Praesentium, provident similique doloremque corporis repudiandae adipisci, nemo deleniti debitis architecto exercitationem corrupti quas, nesciunt quis modi cumque. Assumenda vero tempore ea ullam excepturi? Necessitatibus voluptate debitis doloremque quo in.
      Neque illum sapiente autem cumque vitae ut modi, similique doloribus nulla assumenda quo nisi amet corrupti porro? Quos id explicabo dolorem assumenda temporibus harum commodi cupiditate quo, facere esse accusantium?
      Adipisci reiciendis ad facere quisquam aut! Eligendi, facere. Autem, molestiae repellendus ipsa eos ipsam dolor laudantium harum, dolores corrupti facilis pariatur quas, accusamus illo quaerat facere veniam omnis enim? Quos.
      Libero quisquam vel laborum, nisi fugit vero veniam id porro sint culpa repellat sapiente perspiciatis blanditiis velit, accusamus amet! Explicabo provident laborum, nam sit autem amet dolorem? In, fugit et?
      Dolorem sapiente obcaecati quisquam veritatis commodi veniam soluta molestiae provident, inventore numquam laborum quos asperiores deserunt ut expedita, officiis dolores ratione. Quia quos doloribus atque consectetur, officia vero explicabo maxime.
      Consequatur quasi molestiae, suscipit delectus qui temporibus quibusdam consequuntur quis, magni cumque aperiam dolorum! Impedit dolores illo voluptates porro culpa odio, repudiandae consequatur eius eveniet numquam natus. Porro, et aut.
      Voluptates minima nihil nemo deleniti inventore nesciunt ipsam modi, ad maxime assumenda! Eligendi iure quaerat voluptatum nisi, vero ullam! Animi ipsam aut nisi praesentium facere fuga dolorem a ea maiores?
      Earum qui pariatur, incidunt deserunt eligendi nulla dolor! Officiis rem, tenetur vitae magni quos ipsam soluta, ea facere harum officia fugit optio magnam doloremque id vero tempore dolore. Nesciunt, soluta.
      Quas soluta cumque totam in esse illo commodi dolorem facere et repellat culpa, voluptatum quam, recusandae ea perspiciatis quia excepturi hic quo expedita vel ratione earum illum minus? Harum, sunt?
      Hic mollitia tenetur consectetur laboriosam vero minima consequuntur quam assumenda excepturi, nisi eligendi cupiditate, fuga dolor maiores necessitatibus, illo id! Blanditiis nostrum porro nemo dignissimos, natus velit possimus recusandae voluptas?
      Id rem totam deleniti. Enim doloribus sed eaque mollitia? Blanditiis quas rem neque enim nesciunt temporibus quod recusandae qui cumque vero dignissimos labore modi, tenetur ea tempore, consequuntur atque perferendis!
      Id, repellat. Iste laborum vel accusantium tenetur excepturi, at ipsa veritatis quam modi. Quibusdam iure sapiente nihil, incidunt numquam sed ex magni veritatis vero perferendis cumque nulla commodi voluptatibus. Beatae!
      Odit pariatur corporis sequi aliquid excepturi quas corrupti est, iure ratione assumenda dolorem ducimus fugit distinctio ab molestiae nulla? Sequi autem cum eos quaerat aperiam facilis voluptatum deserunt et! Ex?
      Quia repudiandae maiores ut? Nostrum voluptates eveniet architecto sapiente eos dolor, veritatis vel minima quos voluptas. Molestias provident vel necessitatibus culpa officia dolor quos! Amet delectus deserunt doloremque inventore aliquam?
      Quos, deleniti in temporibus voluptas ipsa perferendis, nam inventore veritatis illo eum dolorum voluptatum quas? Iure deserunt quas aspernatur vel ad totam, obcaecati velit atque voluptas ea odit tenetur rerum.
      Quidem nobis voluptatum dolor inventore beatae exercitationem quibusdam possimus rem facilis delectus. Inventore nihil adipisci rem mollitia maiores odio debitis sequi fugiat perspiciatis, molestias soluta, eum animi molestiae libero eveniet.
      Voluptatem vero similique minus corrupti facere. Laboriosam, fugit! Ab id facere assumenda iste reiciendis ullam doloribus eius similique vitae earum veritatis cum quidem, explicabo velit dolorum harum expedita iusto omnis.
      Sequi eaque nisi beatae molestias at fugiat provident consequuntur, dolorem, enim nam eius illo dolores, blanditiis consectetur in officia? Perferendis omnis accusantium consequuntur laudantium corrupti? Omnis voluptatum eum perferendis itaque?
      Veritatis architecto tenetur itaque ipsa modi beatae blanditiis fugit error reprehenderit iure? Facere quod tempore numquam. Unde iusto et fugiat beatae ipsa. Eos praesentium voluptatibus provident, corrupti quisquam repellendus quo?
      Quas repudiandae, tempora at obcaecati quasi modi veritatis dolorum aperiam harum vel autem nostrum, amet tenetur, eveniet culpa nesciunt accusamus suscipit odio laudantium? Aut velit, dolorum maiores totam voluptate ipsa.
      Et voluptas sunt, quos reprehenderit tenetur ducimus aspernatur amet. Nisi dicta veniam, sed dolorum illum, adipisci nemo et minima, asperiores quasi neque earum ducimus assumenda? Ducimus aspernatur velit beatae eveniet!
      Hic nesciunt est labore itaque quo? Alias possimus excepturi reiciendis illum corporis voluptatum praesentium iusto, ullam, laboriosam at dolor consequatur vero beatae quod numquam, eius eum. Ex unde nisi fugiat.
      Sapiente dolorem voluptas fugit dolorum eius voluptatum repellat a perferendis odit pariatur libero iste impedit ex, possimus sit eos reiciendis expedita vero consectetur, labore iure. Aliquam doloremque cupiditate vel amet?
      Eaque soluta officiis eos, eum temporibus sunt fuga harum dolor fugit? Omnis aspernatur eveniet perspiciatis laborum illum deserunt porro adipisci ipsum magnam consequatur officiis fuga nihil, commodi reprehenderit, tempora inventore.
      Libero expedita suscipit, recusandae doloremque mollitia nulla nam ipsum? Voluptatum modi, explicabo eum aperiam sequi quia similique. Delectus adipisci enim aliquid maiores odio, error quidem. Facilis vel in voluptatem tempore!
      Ad saepe eum tenetur quidem. A itaque ut veniam suscipit consequatur. A autem maiores ipsam corporis ullam tempora excepturi nobis temporibus officiis odio. Consectetur, totam quae beatae natus minus temporibus?
      Architecto, officia! Harum officiis porro qui id iure sint, totam quo ad neque veritatis fuga deleniti ipsam ut adipisci asperiores nesciunt eveniet delectus corrupti provident non corporis? Quod, minus voluptatem.
      Alias, impedit explicabo! Dolor porro exercitationem aspernatur pariatur repudiandae vero magnam sequi dolores vitae ex architecto maiores illo omnis ducimus suscipit ab voluptate, facilis ea consequuntur doloremque officiis quas. Explicabo.
      Totam officia repellat voluptate pariatur optio, consectetur quisquam quia sit necessitatibus reprehenderit nisi voluptatum quibusdam quam maxime odit. Officia aut eligendi alias consequuntur quas praesentium? Labore magni quaerat rem quo.
      Delectus iusto placeat quaerat nesciunt, molestias, aspernatur eveniet nulla optio laborum exercitationem culpa quidem reprehenderit excepturi quod illum possimus dolorum nihil, repellat porro voluptatibus tenetur nostrum mollitia facilis? Tenetur, expedita?
      Exercitationem laborum, similique hic molestiae voluptatum mollitia? Laborum quaerat nisi harum facilis a perspiciatis impedit autem reiciendis velit eos? Deleniti culpa suscipit dolore non ipsum, ducimus magnam tenetur ex. Consequatur.
      Necessitatibus labore laudantium dolorum veniam perferendis possimus in quia. Nostrum soluta a vitae distinctio animi consequatur ex quae at consectetur, fugiat rem quam temporibus, fugit, non doloribus veniam impedit quo.
      Accusantium fugiat sint at voluptate minus id. Quas veritatis tenetur laboriosam odit laborum consequuntur eligendi a voluptate ducimus aut nobis eaque expedita corrupti maxime accusantium, facere alias iure. Iusto, aliquam!
      Et nostrum ullam minima error dolorem asperiores voluptatum corrupti modi ea incidunt molestias excepturi reprehenderit magni qui nam inventore adipisci, totam cumque aspernatur. Maxime veniam quae accusamus sunt. Quisquam, deleniti?
      Officia, dolorem officiis reprehenderit rem, ipsum, optio incidunt quaerat delectus at illum itaque impedit vel dolores! Impedit quas reiciendis nemo sequi, earum expedita unde ab minima laborum nihil aspernatur suscipit?
      Deserunt laborum accusamus pariatur voluptate natus distinctio culpa nostrum? Neque tenetur labore aliquid et. Eos, quasi ipsum sequi non labore maiores, odio ullam accusamus nisi doloribus facere, veniam quis quisquam?
      Numquam repellendus id illo, nostrum aliquid iste nihil, deserunt quaerat dolores tenetur, eum quam esse pariatur itaque dolorem molestiae similique officiis soluta officia quia voluptatibus. Reprehenderit, quo! Officia, illo tempore.
      Aspernatur fuga corrupti esse nemo numquam, officia culpa nulla aut omnis neque tempora sequi consectetur suscipit delectus consequatur ratione. Necessitatibus temporibus sit odit itaque in accusamus voluptas possimus officiis molestias?
      Similique totam id a vel consectetur asperiores natus officia odit ex, magnam adipisci, perferendis eos porro eveniet nisi pariatur error eligendi voluptatum? Debitis architecto est illum itaque nesciunt fugiat nisi?
      Enim maiores, excepturi corrupti obcaecati delectus sapiente deserunt illo consequatur debitis vitae ullam? Voluptatibus perferendis minima possimus, alias tenetur dolorem eum corrupti officia veritatis ipsum beatae quia minus eaque repudiandae.
      Voluptatem, voluptatum. Labore, similique! Unde amet quam numquam, fuga magnam ex eius esse laudantium perspiciatis harum illo? Natus velit vel placeat eum obcaecati non nisi ad, consequuntur similique facilis harum?
      Porro optio laborum ex consequuntur praesentium ipsa est voluptatibus delectus facere quaerat fugit consequatur quam esse non, asperiores hic illo expedita perferendis voluptatum aut ab sunt, eius distinctio. Maxime, aspernatur!
      Minima esse quasi non sunt at laudantium nulla quibusdam dolore officia reiciendis laborum recusandae earum repellendus dolorum inventore iste veniam similique doloribus quae, ex harum facilis deleniti. Repudiandae, animi saepe.
      Accusamus labore molestiae temporibus ipsum hic fugit consequatur omnis quasi alias, ab beatae possimus est consequuntur saepe, quod esse asperiores minima libero rem odit blanditiis eaque non. Tempore, velit impedit!
      Fugiat a quae veritatis beatae mollitia voluptas atque illo, quisquam officiis eveniet ea voluptatibus! Animi quaerat, doloremque quos quae maiores autem temporibus vel, veniam sunt modi accusamus dicta nobis quo.
      Odit repudiandae temporibus facilis nulla inventore! Molestias ut facilis sequi inventore est exercitationem error, blanditiis incidunt consequatur repellendus impedit aperiam voluptatem asperiores numquam architecto at. Iusto nostrum ipsa dolorem minima?
      Architecto amet incidunt, accusamus porro iste id corrupti totam iusto, error pariatur quam, quasi earum a explicabo reiciendis sit dolores nemo facere? Illo eum saepe reiciendis nemo dolorum natus id!
      Reiciendis, ullam voluptatem? Adipisci possimus corporis iste asperiores nisi quidem, repellat ratione! Facilis autem omnis inventore, delectus dolor blanditiis nihil! Iste doloribus quia excepturi reiciendis consequuntur non placeat quisquam nihil?
      Itaque aliquam incidunt magnam porro tempora autem, blanditiis voluptate possimus alias, consequuntur, animi corrupti. Sit officiis eligendi asperiores tempora, quidem hic voluptatibus unde exercitationem rem excepturi quia inventore neque suscipit.
      Consequatur amet fugiat officia ullam, temporibus debitis! Tempora dolore quidem vitae aperiam non praesentium, rem explicabo cumque tenetur. Dolore, itaque inventore? Expedita veritatis incidunt optio quibusdam illum fugit soluta a!
      Non recusandae doloribus eligendi ad, illum optio adipisci eos autem id aut minus neque dolore aliquid accusamus iste inventore aperiam architecto asperiores perspiciatis? Quisquam aspernatur at, ad ex soluta nisi!
      Vero quae nisi dolorem sequi aspernatur fuga eos quam distinctio, ipsam quis illum rem tenetur facere natus corrupti neque praesentium tempore atque eligendi non adipisci! Repudiandae possimus nihil animi modi?
      Quibusdam repellendus natus ullam in quae accusamus facilis nisi aliquam dolorum itaque, nulla ea, quasi laudantium beatae soluta placeat dolores rerum deleniti facere, veritatis iusto ratione modi veniam. Aspernatur, beatae.
      Quam a, id voluptas accusantium quo illum odit perspiciatis! At fugiat quibusdam, vitae alias id dolores eum architecto aliquid eius ab corporis, aut error. Dolorem cum dignissimos a blanditiis architecto?
      A similique natus maxime eos beatae id excepturi unde accusantium animi ea impedit, vel placeat repellendus molestias iste quas hic dolorem at esse voluptatem necessitatibus, cumque dignissimos magni aliquam? Omnis?
      Incidunt repellendus sit dolor iste eius dolore cum, consequuntur expedita, odio nemo facilis exercitationem porro. Expedita, earum. Laudantium eius voluptatem, vel perspiciatis quis qui amet necessitatibus vitae sit voluptas velit.
      Unde animi voluptas enim illum, magnam numquam at ullam possimus autem, dolorem, qui laudantium ea dolore provident officiis? Excepturi esse molestias, incidunt hic repudiandae illum? Ab quibusdam minima fugiat quos!
      Minima, magni praesentium. Earum deleniti porro aliquid quas saepe harum dolorem praesentium quae, voluptate vitae tempora fuga dolore dicta doloribus adipisci cum, autem illum animi perspiciatis libero blanditiis? Veritatis, modi.
      Id quos aperiam sit totam possimus, eos nemo corporis aspernatur eum, non, itaque repudiandae praesentium blanditiis in distinctio voluptate iusto unde repellat doloremque? Et at doloremque optio perspiciatis velit! Esse.
      Alias non deleniti provident accusantium error eaque illum magnam temporibus dolore. Dicta ratione consectetur esse, enim numquam in laborum expedita porro laudantium quis sapiente ipsa labore aliquid odit fugiat quae?
      Nemo, error quibusdam, neque quisquam optio eveniet maxime doloremque quasi cum dolorem commodi laborum? Obcaecati, cumque nostrum! Culpa, numquam harum, cupiditate totam, obcaecati voluptates nemo dignissimos magnam maxime beatae aliquam?
      Necessitatibus facilis, exercitationem assumenda praesentium, dolorum laudantium aliquam porro mollitia, facere nobis eligendi veritatis nulla officiis? Ullam illum ea id magnam, itaque, reiciendis consectetur a ipsa nisi animi praesentium autem?
      Adipisci culpa facilis deleniti temporibus eveniet deserunt, non labore qui et accusantium corrupti odio maxime numquam iste libero doloribus laboriosam maiores iusto doloremque, quas repellendus fuga, quae esse. Nam, magnam.
      Officiis deserunt dolores perferendis nihil laborum sequi officia earum quos nulla modi! Deleniti fuga qui beatae consequuntur, accusantium aliquid quaerat harum sunt sit doloremque culpa animi consectetur quod id dicta?
      Eaque, rem ullam dignissimos nesciunt enim neque eligendi non doloremque minima quaerat eius aliquid iste esse nobis mollitia velit facilis. Quas voluptatibus laudantium, nulla ratione accusamus expedita odio assumenda vitae.
      Obcaecati aliquam soluta ab expedita voluptas vitae culpa sapiente est facilis molestias, provident cumque commodi maxime placeat quae dignissimos! Vel dolorem dicta sapiente? Autem asperiores aut praesentium similique voluptatibus repudiandae.
      Doloribus, cum repellat laudantium, in, consequatur veniam eius voluptatem rerum nulla labore quisquam itaque sunt esse nisi iste hic iusto quod consectetur? Consequatur omnis excepturi ad officia, sunt quibusdam beatae!
      Beatae molestias enim autem ratione dolores recusandae, perspiciatis, consectetur expedita magnam quasi assumenda necessitatibus reiciendis aliquid accusantium illo itaque veniam temporibus vitae voluptatem tempore rerum? Aliquam debitis dignissimos quos voluptatum?
      Voluptatem odio eius impedit asperiores repellat accusantium mollitia dignissimos perspiciatis suscipit? Voluptatibus nulla obcaecati assumenda, doloremque quia error cupiditate ab et alias reprehenderit! Aspernatur ex, nobis sapiente voluptates explicabo rerum!
      Eligendi, iusto rem similique nostrum distinctio quas itaque suscipit dolorum repudiandae assumenda totam quidem dolorem sit nemo error eum, reiciendis harum reprehenderit, esse unde laudantium. Nam cum voluptatibus odio quaerat.
      Omnis sed illo doloremque illum, enim labore veritatis dolorem porro iste tenetur! Ipsam necessitatibus dolore quas? Unde enim rerum asperiores, corrupti quo voluptatum reiciendis. Dolores temporibus non sit tenetur exercitationem.
      Rem excepturi incidunt nostrum iste eum, distinctio minima. Libero hic expedita adipisci temporibus deserunt, repudiandae dolor recusandae qui. Magni necessitatibus ab explicabo itaque aut saepe placeat, unde id quisquam cumque.
      Repudiandae reprehenderit consequuntur dicta porro facere, temporibus delectus laudantium tempora nulla eligendi, a ipsum veniam soluta adipisci quidem libero, quisquam earum. Illo nobis quod voluptatum doloremque cupiditate excepturi officia perspiciatis.
    </section>


    <section className='h-[100vh] bg-blue-700'>
      <div className='pt-20 pl-50'>
        <GlassCard width='w-100' height='h-50' borderRadius='rounded-full'/>
      </div>
    </section>
    </>
  )
}

export default Home