import { Column, Entity, Index } from "typeorm";

@Index("dokumen_pkey", ["jnsDokumen", "kdKantor", "kdKanwil", "noDokumen"], {
  unique: true,
})
@Entity("dokumen", { schema: "public" })
export class Dokumen {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "jns_dokumen", length: 1 })
  jnsDokumen!: string;

  @Column("character", { primary: true, name: "no_dokumen", length: 11 })
  noDokumen!: string;

  @Column("timestamp without time zone", { name: "tgl_pendataan_dok" })
  tglPendataanDok!: Date;

  @Column("character", { name: "nip_pendata_dok", nullable: true, length: 18 })
  nipPendataDok!: string | null;

  @Column("timestamp without time zone", { name: "tgl_pemeriksaan_dok" })
  tglPemeriksaanDok!: Date;

  @Column("character", {
    name: "nip_pemeriksa_dok",
    nullable: true,
    length: 18,
  })
  nipPemeriksaDok!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_perekaman_dok",
    default: () => "statement_timestamp()",
  })
  tglPerekamanDok!: Date;

  @Column("character", { name: "nip_perekam_dok", nullable: true, length: 18 })
  nipPerekamDok!: string | null;
}
