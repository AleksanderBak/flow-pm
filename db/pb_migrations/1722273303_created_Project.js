/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "57mek2zcba0q94m",
    "created": "2024-07-29 17:15:03.986Z",
    "updated": "2024-07-29 17:15:03.986Z",
    "name": "Project",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "trsuf8ma",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("57mek2zcba0q94m");

  return dao.deleteCollection(collection);
})
