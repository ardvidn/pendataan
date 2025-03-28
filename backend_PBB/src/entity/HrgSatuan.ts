import { Column, Entity, Index } from "typeorm";

@Index("hrg_satuan_pkey", ["kdDati2", "kdKegiatan", "kdPekerjaan", "kdPropinsi", "thnHrgSatuan"], { unique: true })
@Index("c10_1_ak", ["kdDati2", "kdKegiatan", "kdPekerjaan", "kdPropinsi", "thnHrgSatuan"], { unique: true })
@Entity("hrg_satuan", { schema: "public" })
export class HrgSatuan {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_hrg_satuan", length: 4 })
  thnHrgSatuan!: string;

  @Column("character", { primary: true, name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { primary: true, name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("numeric", { name: "hrg_satuan", precision: 11, scale: 4 })
  hrgSatuan!: string;
}
