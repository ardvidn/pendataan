import { Column, Entity, Index } from "typeorm";

@Index("j2_1_ak", ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"], {
  unique: true,
})
@Index("spmkp_pkey", ["kdKantor", "kdKanwil", "noSpmkp"], { unique: true })
@Entity("spmkp", { schema: "public" })
export class Spmkp {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "no_spmkp", length: 30 })
  noSpmkp!: string;

  @Column("timestamp without time zone", { name: "tgl_spmkp" })
  tglSpmkp!: Date;

  @Column("character", { name: "thn_pelayanan", length: 4 })
  thnPelayanan!: string;

  @Column("character", { name: "bundel_pelayanan", length: 4 })
  bundelPelayanan!: string;

  @Column("character", { name: "no_urut_pelayanan", length: 3 })
  noUrutPelayanan!: string;

  @Column("character", { name: "kd_propinsi_pemohon", length: 2 })
  kdPropinsiPemohon!: string;

  @Column("character", { name: "kd_dati2_pemohon", length: 2 })
  kdDati2Pemohon!: string;

  @Column("character", { name: "kd_kecamatan_pemohon", length: 3 })
  kdKecamatanPemohon!: string;

  @Column("character", { name: "kd_kelurahan_pemohon", length: 3 })
  kdKelurahanPemohon!: string;

  @Column("character", { name: "kd_blok_pemohon", length: 3 })
  kdBlokPemohon!: string;

  @Column("character", { name: "no_urut_pemohon", length: 4 })
  noUrutPemohon!: string;

  @Column("character", { name: "kd_jns_op_pemohon", length: 1 })
  kdJnsOpPemohon!: string;

  @Column("character varying", { name: "no_rek_wp", length: 20 })
  noRekWp!: string;

  @Column("character varying", {
    name: "nm_bank_wp",
    nullable: true,
    length: 30,
  })
  nmBankWp!: string | null;

  @Column("timestamp without time zone", { name: "tgl_rekam_spmkp" })
  tglRekamSpmkp!: Date;

  @Column("character", { name: "nip_rekam_spmkp", length: 18 })
  nipRekamSpmkp!: string;
}
