import { Column, Entity } from "typeorm";

@Entity("hrg_satuan1", { schema: "public" })
export class HrgSatuan1 {
  @Column("character", { name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { name: "thn_hrg_satuan", length: 4 })
  thnHrgSatuan!: string;

  @Column("character", { name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("numeric", { name: "hrg_satuan", precision: 11, scale: 4 })
  hrgSatuan!: string;
}
