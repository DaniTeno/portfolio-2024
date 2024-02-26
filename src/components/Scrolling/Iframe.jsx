import CodeTag from "../CustomElements/CodeTag";
import ArticleCard from "../Layouts/ArticleCard";

const Iframe = () => {
  return (
    <ArticleCard isVisible editorStyle title="Location" width='mx-auto lg:mx-0'>
      <div className="flex">
        <CodeTag tag="iframe" tagStyle="text-yellow-400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62784.898968316935!2d-64.21307179598274!3d10.417112483691893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c326e2877a49763%3A0x735aea704ea2e322!2zQ3VtYW7DoSwgU3VjcmU!5e0!3m2!1ses!2sve!4v1696692992914!5m2!1ses!2sve"
            width="300"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border border-yellow-400 rounded-md"
          ></iframe>
        </CodeTag>

      </div>
    </ArticleCard>
  );
};

export default Iframe;
