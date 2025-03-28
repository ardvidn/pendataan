import { Column, Entity } from "typeorm";

@Entity("hrg_resource1", { schema: "public" })
export class HrgResource1 {
  @Column("character", { name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { name: "thn_hrg_resource", length: 4 })
  thnHrgResource!: string;

  @Column("character", { name: "kd_group_resource", length: 2 })
  kdGroupResource!: string;

  @Column("character", { name: "kd_resource", length: 2 })
  kdResource!: string;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kppbb", length: 2 })
  kdKppbb!: string;

  @Column("character", { name: "jns_dokumen", length: 1 })
  jnsDokumen!: string;

  @Column("character", { name: "no_dokumen", length: 11 })
  noDokumen!: string;

  @Column("numeric", { name: "hrg_resource", precision: 10, scale: 2 })
  hrgResource!: string;
}
