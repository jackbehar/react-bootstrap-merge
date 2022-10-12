import Tabs from "../Tabs";
import Tab from "../../Tab/Tab";

export default (
  <Tabs
    uxpId="tabs-1"
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab uxpId="tab-1" eventKey="home" title="Home">
        Why is my verse so barren of new pride, So far from variation or quick change? 
        Why with the time do I not glance aside To new-found methods, and to compounds strange? 
        Why write I still all one, ever the same, And keep invention in a noted weed, 
        That every word doth almost tell my name, Showing their birth, and where they did proceed? O! 
        know sweet love I always write of you, And you and love are still my argument;
    </Tab>
    <Tab uxpId="tab-2" eventKey="profile" title="Profile">
        Alas! 'tis true, I have gone here and there, And made my self a motley to the view, Gor'd mine own thoughts, 
        sold cheap what is most dear, Made old offences of affections new; Most true it is, 
        that I have look'd on truth Askance and strangely; but, by all above, 
        These blenches gave my heart another youth, And worse essays prov'd thee my best of love. 
        Now all is done, save what shall have no end: Mine appetite I never more will grind
    </Tab>
    <Tab uxpId="tab-3" eventKey="contact" title="Contact" disabled>
        Being your slave what should I do but tend, Upon the hours, and times of your desire? 
        I have no precious time at all to spend; Nor services to do, till you require. 
        Nor dare I chide the world-without-end hour, Whilst I, my sovereign, watch the clock for you, 
        Nor think the bitterness of absence sour, When you have bid your servant once adieu; 
        Nor dare I question with my jealous thought Where you may be, or your affairs suppose,
    </Tab>
  </Tabs>
)