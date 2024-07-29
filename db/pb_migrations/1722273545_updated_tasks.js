/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z3y0j37443gov82")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tz7kull5",
    "name": "group",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cvjdowcpr0co29g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z3y0j37443gov82")

  // remove
  collection.schema.removeField("tz7kull5")

  return dao.saveCollection(collection)
})
