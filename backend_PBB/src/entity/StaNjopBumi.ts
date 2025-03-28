import { Column, Entity, Index } from "typeorm";

@Index("y3_1_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdKlsTanah", "kdPropinsi", "staThnNjopBumi"], {})
@Index("sta_njop_bumi_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdKlsTanah", "kdPropinsi", "staThnNjopBumi", "thnAwalKlsTanah"], { unique: true })
@Entity("sta_njop_bumi", { schema: "public" })
export class StaNjopBumi {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "sta_thn_njop_bumi", length: 4 })
  staThnNjopBumi!: string;

  @Column("character", { primary: true, name: "kd_kls_tanah", length: 3 })
  kdKlsTanah!: string;

  @Column("character", { primary: true, name: "thn_awal_kls_tanah", length: 4 })
  thnAwalKlsTanah!: string;

  @Column("bigint", { name: "sta_total_op_bumi", nullable: true })
  staTotalOpBumi!: string | null;

  @Column("bigint", { name: "sta_total_luas_bumi", nullable: true })
  staTotalLuasBumi!: string | null;

  @Column("bigint", { name: "sta_total_nilai_bumi", nullable: true })
  staTotalNilaiBumi!: string | null;

  @Column("bigint", { name: "sta_njop_bumi", nullable: true })
  staNjopBumi!: string | null;
}
