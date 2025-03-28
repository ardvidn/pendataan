import { Column, Entity, Index } from "typeorm";

@Index("hrg_resource_pkey", ["kdDati2", "kdGroupResource", "kdPropinsi", "kdResource", "thnHrgResource"], { unique: true })
@Index("c20_1_ak", ["kdDati2", "kdGroupResource", "kdPropinsi", "kdResource", "thnHrgResource"], { unique: true })
@Entity("hrg_resource", { schema: "public" })
export class HrgResource {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_hrg_resource", length: 4 })
  thnHrgResource!: string;

  @Column("character", { primary: true, name: "kd_group_resource", length: 2 })
  kdGroupResource!: string;

  @Column("character", { primary: true, name: "kd_resource", length: 2 })
  kdResource!: string;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "jns_dokumen", length: 1 })
  jnsDokumen!: string;

  @Column("character", { name: "no_dokumen", length: 11 })
  noDokumen!: string;

  @Column("numeric", { name: "hrg_resource", precision: 10, scale: 2 })
  hrgResource!: string;
}
