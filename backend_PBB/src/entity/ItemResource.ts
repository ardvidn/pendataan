import { Column, Entity, Index } from "typeorm";

@Index("item_resource_pkey", ["kdGroupResource", "kdResource"], {
  unique: true,
})
@Entity("item_resource", { schema: "public" })
export class ItemResource {
  @Column("character", { primary: true, name: "kd_group_resource", length: 2 })
  kdGroupResource!: string;

  @Column("character", { primary: true, name: "kd_resource", length: 2 })
  kdResource!: string;

  @Column("character varying", { name: "nm_resource", length: 45 })
  nmResource!: string;

  @Column("character varying", {
    name: "satuan_resource",
    nullable: true,
    length: 15,
  })
  satuanResource!: string | null;
}
