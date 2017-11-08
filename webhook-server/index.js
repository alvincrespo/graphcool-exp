const express = require('express')
const app = express()
app.use(express.json());

const data = [{"id":1,"first_name":"Martainn","last_name":"Moorwood","email":"mmoorwood0@blogger.com","gender":"Male","ip_address":"52.105.79.153","location":{"city":"Cincinnati","state":"Ohio"}},
{"id":2,"first_name":"Shannan","last_name":"Jakubovitch","email":"sjakubovitch1@biglobe.ne.jp","gender":"Male","ip_address":"57.51.60.154","location":{"city":"Charlotte","state":"North Carolina"}},
{"id":3,"first_name":"Alyson","last_name":"Itzkowicz","email":"aitzkowicz2@twitter.com","gender":"Female","ip_address":"210.162.183.75","location":{"city":"Chicago","state":"Illinois"}},
{"id":4,"first_name":"Lalo","last_name":"Ference","email":"lference3@elegantthemes.com","gender":"Male","ip_address":"61.254.152.136","location":{"city":"Reading","state":"Pennsylvania"}},
{"id":5,"first_name":"Creight","last_name":"McGeaney","email":"cmcgeaney4@senate.gov","gender":"Male","ip_address":"121.9.2.0","location":{"city":"Las Vegas","state":"Nevada"}},
{"id":6,"first_name":"Anabel","last_name":"Dutnall","email":"adutnall5@artisteer.com","gender":"Female","ip_address":"174.237.252.181","location":{"city":"Melbourne","state":"Florida"}},
{"id":7,"first_name":"Chicky","last_name":"Rustadge","email":"crustadge6@blog.com","gender":"Male","ip_address":"240.115.81.219","location":{"city":"Merrifield","state":"Virginia"}},
{"id":8,"first_name":"Janette","last_name":"Duval","email":"jduval7@springer.com","gender":"Female","ip_address":"231.173.106.49","location":{"city":"Fairbanks","state":"Alaska"}},
{"id":9,"first_name":"Eran","last_name":"Beddin","email":"ebeddin8@ted.com","gender":"Female","ip_address":"165.190.138.171","location":{"city":"Independence","state":"Missouri"}},
{"id":10,"first_name":"Gilberte","last_name":"Bratcher","email":"gbratcher9@pinterest.com","gender":"Female","ip_address":"250.227.243.236","location":{"city":"Brooklyn","state":"New York"}},
{"id":11,"first_name":"Courtnay","last_name":"Trenoweth","email":"ctrenowetha@bandcamp.com","gender":"Male","ip_address":"35.163.119.198","location":{"city":"Washington","state":"District of Columbia"}},
{"id":12,"first_name":"Kalila","last_name":"Pinock","email":"kpinockb@gravatar.com","gender":"Female","ip_address":"173.250.231.15","location":{"city":"Bronx","state":"New York"}},
{"id":13,"first_name":"Gerrard","last_name":"Meakes","email":"gmeakesc@miitbeian.gov.cn","gender":"Male","ip_address":"253.174.49.32","location":{"city":"Des Moines","state":"Iowa"}},
{"id":14,"first_name":"Kiley","last_name":"Honnan","email":"khonnand@prlog.org","gender":"Male","ip_address":"49.50.71.136","location":{"city":"Chula Vista","state":"California"}},
{"id":15,"first_name":"Susan","last_name":"Fetherston","email":"sfetherstone@prnewswire.com","gender":"Female","ip_address":"186.238.114.230","location":{"city":"Orlando","state":"Florida"}},
{"id":16,"first_name":"Ilysa","last_name":"Hutchinges","email":"ihutchingesf@slideshare.net","gender":"Female","ip_address":"58.121.6.64","location":{"city":"Harrisburg","state":"Pennsylvania"}},
{"id":17,"first_name":"Merrilee","last_name":"Coppledike","email":"mcoppledikeg@google.co.uk","gender":"Female","ip_address":"59.43.136.210","location":{"city":"Springfield","state":"Illinois"}},
{"id":18,"first_name":"Codi","last_name":"Moreinis","email":"cmoreinish@ebay.co.uk","gender":"Female","ip_address":"243.138.168.112","location":{"city":"Harrisburg","state":"Pennsylvania"}},
{"id":19,"first_name":"Gilles","last_name":"Behrendsen","email":"gbehrendseni@simplemachines.org","gender":"Male","ip_address":"168.119.83.215","location":{"city":"Mansfield","state":"Ohio"}},
{"id":20,"first_name":"Hinda","last_name":"Crabbe","email":"hcrabbej@skype.com","gender":"Female","ip_address":"0.84.221.30","location":{"city":"Denver","state":"Colorado"}}]

app.post('/', function (req, res) {
  console.log(req.body)
  res.send({ data: { users: data }});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
