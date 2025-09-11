import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./components/Parent";
import { UserProvider } from "./contexts/UserContext";
import Modal from "./components/Modal";
import { motion, scale, useScroll } from "motion/react";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    return (
        // <>
        //     <UserProvider>
        //         <Parent />
        //     </UserProvider>

        //     <button56774558
        //         onClick={() => {
        //             setIsOpen(!isOpen);
        //         }}
        //     >
        //         OPEN
        //     </button56774558>
        //     <Modal isOpen={isOpen}>HI THIS IS MODAL AD</Modal>
        // </>
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "left",
                    position: "fixed",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 10,
                    backgroundColor: "#ff0088",
                }}
            />

            <motion.button
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            />
        </>
    );
}

function Content({ ref }) {
    return (
        <article
            ref={ref}
            style={{
                maxWidth: 500,
                padding: "150px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                height: "400px",
                overflow: "auto",
            }}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat, ea dignissimos velit praesentium iste magnam officiis
                autem, aperiam quidem laboriosam minima adipisci, id recusandae
                repellendus. Esse consequatur ducimus suscipit enim nulla
                necessitatibus blanditiis mollitia?
            </p>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                fugiat assumenda, atque, hic obcaecati quidem quisquam aliquid
                placeat quaerat deserunt molestias tenetur sint suscipit nihil
                illum dolor maiores consectetur non error magni praesentium
                dolores!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis consequuntur optio cupiditate repudiandae
                exercitationem sint fugit? Ab illo quis facilis veritatis quasi
                voluptatum libero, unde, tempore eos labore illum autem sunt hic
                in nobis. At repudiandae accusamus quisquam et totam amet
                pariatur nisi assumenda deleniti reprehenderit, maxime nesciunt
                quis officiis, odit consectetur error. Ad itaque libero quasi
                odio tempora nam eligendi, quaerat consequuntur alias? Ipsam
                aliquam numquam perferendis, molestiae quia minus ratione,
                reprehenderit molestias fuga quibusdam fugiat distinctio eveniet
                quis, et earum? Laborum dicta quae excepturi deserunt
                architecto. Dolore officiis quas id harum voluptates! Delectus
                dolor corrupti vel architecto voluptas reprehenderit labore
                blanditiis error at nisi consectetur assumenda ullam
                consequatur, numquam doloribus consequuntur libero cupiditate
                aperiam natus! Libero ullam modi eaque harum explicabo rerum, in
                porro reprehenderit dignissimos? Eum eos consectetur consequatur
                ex vel ad, laudantium est in velit similique assumenda aliquam
                error quas doloribus ipsum! Recusandae, cumque similique
                deserunt eum expedita laborum voluptatum. Quaerat officia
                perspiciatis eos voluptate laudantium est aliquid dicta illum
                esse quibusdam doloribus molestiae dignissimos nulla aliquam,
                amet quo labore ducimus magni architecto omnis! Dolores rerum
                excepturi voluptatem, aperiam quas itaque quibusdam maxime
                explicabo quo laborum pariatur in tempore optio numquam porro
                quis facere laboriosam, cumque neque adipisci nobis quos
                incidunt laudantium. Deleniti totam harum, necessitatibus quam
                architecto adipisci enim, alias excepturi, officia iste
                mollitia. Beatae sint quisquam tempore, natus nobis magnam
                fugiat soluta nam amet modi tempora quidem praesentium nemo quam
                sapiente aspernatur impedit. Sed ex voluptatibus unde? Quas
                magnam vero, soluta omnis repellat adipisci! Exercitationem
                facilis natus quas? Nostrum ipsa cumque, veritatis doloribus cum
                harum porro voluptas tempora quod quos. Cupiditate autem quas
                porro sit nam ipsa qui omnis esse ducimus, laudantium magnam
                sint consequuntur dicta, iusto, architecto unde? Velit ipsum ab
                repellat facilis, illo inventore perspiciatis optio accusamus
                dolores aspernatur iusto libero impedit eum deleniti dicta
                suscipit, voluptatum harum similique ut error temporibus.
                Molestiae aspernatur voluptates voluptatum fugit excepturi in,
                amet nesciunt blanditiis. Deleniti beatae voluptas expedita
                necessitatibus hic placeat dolorem perferendis molestias!
                Dolore, ullam! Natus!
            </p>
        </article>
    );
}

export default App;
